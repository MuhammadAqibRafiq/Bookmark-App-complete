import React,{useState,useEffect} from "react";
import ListRender from './../component/List'
import AddForm from './../component/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as containerStyles from './../style/card.module.css'

function App() {

  const [links, setLinks] = useState();

  const loadLinks = async () => {
      const res = await fetch('/api/getLinks');
      const Links = await res.json();
      setLinks(Links)
      // console.log(Links);
  }

  // console.log("use", links);

  useEffect(() => {
      loadLinks();
  }, [])

  return (
  
 <div className={containerStyles.bg}>
    <div className="container py-4">
   
     <AddForm loadLinks={loadLinks} />
     <ListRender links={links} loadLinks={loadLinks}/>
 
    </div>
    </div>

  );
}

export default App;

