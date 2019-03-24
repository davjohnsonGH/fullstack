import React from 'react';
// ======== only for firebase ===========
/* import { firestore } from '../db/firebase/config';*/
// ======== only for firebase ===========
import "babel-polyfill";

class App extends React.Component {

    componentDidMount = async () => {
        // ======== only for firebase ===========
        /* const snapshot = await firestore.collection('anything').get();

        const posts = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                data: doc.data()
            };
        })
        console.log(posts)
         */
      // ======== only for firebase ===========  
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
