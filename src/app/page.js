'use client'
import { useState } from "react";
import styles from "./page.module.css";
import {useRouter} from 'next/navigation'
import Link from "next/link";


export default function Home() {
  const [name, setName] = useState("Anand")
  const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }

  const fruit =()=>{
    setName('Gautam')
  }
 
  return (
    <div className={styles.page}>
      {/* <h1>Event function and state{name}</h1> */}
      {/* <button onClick={()=>fruit()}>Click Me</button> */}
      {/* <button onClick={()=>router.push('/login')}>go to login page</button>
      <button onClick={()=>router.push('/about')}>go to About page</button>
      <button onClick={()=>navigate('/about')}>go to About page</button> */}
      <h1>fetch data with api in client component</h1>
      <Link href="/productlist">go to  product list</Link>
      <Link href="/itemlist">go to item</Link>

    </div>
  );
}



