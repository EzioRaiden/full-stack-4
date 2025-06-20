'use client'

import { auth, db } from "@/firebase"
import { subscriptions } from "@/utils"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"
const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider(props) {
    const { children } = props

    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        setCurrentUser(null)
        setUserData(null)
        return signOut(auth)
    }
    
    async function saveToFirebase(data){
        try{
            const userRef = doc(db,'users',currentUser.uid)
            const res=await setDoc(userRef,{
                subscriptions:data
            },{merge:true})
        }catch(err){
            console.log(err.message)
        }
    }
    
    async function handleAddSubscription(newSubscription) {
        //modify the local state (global context)
        const newSubscriptions = [...userData.subscriptions, newSubscription]
        setUserData({ subscriptions: newSubscriptions })
        //write the changes to our firebase database (async)
        await saveToFirebase(newSubscriptions)

    }


    async function handleDeleteSubscription(index) {
        if (userData.subscriptions.length > 30) { return }
        //delete at the index
        const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
            return valIndex !== index
        })
        setUserData({ subscriptions: newSubscriptions })
        await saveToFirebase(newSubscriptions)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                setCurrentUser(user)
                if (!user) { return }

                //found user so check database
                setLoading(true)

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                console.log('Fetching user data')
                // let firebaseData = { subscriptions }
                let firebaseData = {subscriptions: []}
                // //default data for a new user
                if (docSnap.exists()) {
                    //data found
                    console.log('Found user data')
                    firebaseData = docSnap.data()
                }
                setUserData(firebaseData)
                setLoading(false)
            } catch (err) {
                console.log(err.message)
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, userData, loading, signup, login, logout, handleAddSubscription, handleDeleteSubscription
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}