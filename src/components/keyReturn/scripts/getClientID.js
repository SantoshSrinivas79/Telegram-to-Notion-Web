import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebase } from './FirebaseConfig'

const getClientID = async () => {

    try {
        
        const db = getFirestore(firebase)
        const docRef = doc(db, 'client-id', 'client-id')
        const docSnap = await getDoc(docRef)

        const data = docSnap.data()

        return data

    } catch (error) {
        console.log(error)
    }
}

export default getClientID
