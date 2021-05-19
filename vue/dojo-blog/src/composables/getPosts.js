// const { ref } = require("@vue/reactivity")
import {ref} from 'vue';
import {projectFirestore} from '../firebase/config'

const getPosts = () => {
    const posts = ref([ ])
    const error = ref(null)
 
    const load = async() => {
      try{
        // simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })
      
        // let data = await fetch('http://localhost:3000/posts')
        //  if(!data.ok) {
        //    throw Error('no data awailable')
        //  }
        //  posts.value = await data.json()

        const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
        //console.log(res.docs)
        posts.value = res.docs.map(doc => {
          //console.log(doc.data())
          return { ...doc.data(), id: doc.id}
        })
       }
      catch (err) {
        error.value = err.message
      }
    }
    return { posts, error, load}
}

export default getPosts