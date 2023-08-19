"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header';
import Description from '@/components/Description';
import { useState, useEffect, useRef, useMemo } from "react"
import Link from 'next/link';

const calculateIncome = () => {
  let number = 10;
  for (let i = 0; i < 10000; i++) {
    number = number + i;
  }
  console.log("Calculating.....")
  return number;
}

function Home() {

  const [counter, setCounter] = useState(0);
  const [success, setSuccess] = useState(false);
  const [shouldCalculateIncome, setShouldCalculateIncome] = useState(false);
  const income = useMemo(() => calculateIncome(), [shouldCalculateIncome]);
  const inputRef = useRef<HTMLInputElement>(null);
  const clickToFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    console.log(inputRef.current?.value)
  }
  const handleInputChange = (e) => {
    console.log(e.target.value);
  }
  const handleClick = () => {
    setCounter(counter + 1)
    if (counter === 10) {
      setShouldCalculateIncome(true);
      setSuccess(true);
    }
    console.log(counter);
  }
  const reset = () => {
    setCounter(0)
    console.log(counter);
  }
  useEffect(() => {
    console.log("# Event is success!")
  }, [success])
  useEffect(() => {
    console.log("## counter has been triggered!")
  }, [counter])
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <div>Counter:{counter}</div>
      <div style={{ flexDirection: "row" }}>
        <input ref={inputRef} onChange={handleInputChange} />
        <button onClick={clickToFocus}>Click to focus the input</button>
      </div>
      <button onClick={handleClick}>Click to increment the counter</button>
      <button onClick={reset}>Click to reset the counter</button>
      {/* <div>
        <Header text="An Awesome Header" subText='Here is the sub text Of the header element' />
        <Description />
      </div>
      <Link href={"/about"}>go to about Page</Link> */}
    </main>
  )
}
export default Home;