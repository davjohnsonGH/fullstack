import React from 'react';
import { firestore } from '../db/firebase/config';
import "babel-polyfill";

class App extends React.Component {
    componentDidMount = async () => {
        const snapshot = await firestore.collection('posts').get();

        const posts = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                data: doc.data()
            };
        })
        console.log(posts)
    }    
    render () {
        return (
            <div>
                Hello React!
            </div>
        )
    }
}
export default App;
