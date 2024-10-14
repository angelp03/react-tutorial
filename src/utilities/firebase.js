// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useCallback, useEffect, useState } from "react";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, update} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMNRSQUGNqYDnE8--KLGrnYhu1aB7PzbE",
    authDomain: "react-tutorial-54678.firebaseapp.com",
    databaseURL: "https://react-tutorial-54678-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-54678",
    storageBucket: "react-tutorial-54678.appspot.com",
    messagingSenderId: "1092220433422",
    appId: "1:1092220433422:web:6cad7e2f0e49071eb8f85f",
    measurementId: "G-36X28C49QD"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(() => (
        onValue(ref(database, path), (snapshot) => {
            setData( snapshot.val() );
            }, (error) => {
            setError(error);
            })
        ), [ path ]);
    return [ data, error ];
};

const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
        update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
    return [updateData, result];
};