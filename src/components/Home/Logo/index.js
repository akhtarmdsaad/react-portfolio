import { useEffect} from 'react';
import './index.css';

const Index = () => {
  useEffect(()=>{
    
    const wrapper = document.querySelector(".words");
    const words = wrapper.querySelectorAll("span");
    const currentWord = wrapper.querySelector("span.current");
    const wordsWidths = Array.from(words).map((word) => word.offsetWidth);
    const maxWordsWidth = Math.max(...wordsWidths);
    const CURRENT_CLASS = "current";
    const NEXT_CLASS = "next";

    wrapper.style.setProperty("width", `${currentWord.offsetWidth}px`);
    wrapper.style.setProperty("width-mobile", `${maxWordsWidth}px`);

      const interval = setInterval(() => {
        const currentWord = wrapper.querySelector("span.current");
        const nextWord = wrapper.querySelector("span.next");
        const nextNextWord = nextWord.nextElementSibling
          ? nextWord.nextElementSibling
          : wrapper.firstElementChild;
        currentWord.classList.remove(CURRENT_CLASS);
        nextWord.classList.remove(NEXT_CLASS);
        nextWord.classList.add(CURRENT_CLASS);
        nextNextWord.classList.add(NEXT_CLASS);
        wrapper.style.setProperty("color", nextWord.dataset.color);
        wrapper.style.setProperty("background", nextWord.dataset.bgColor);
        wrapper.style.setProperty("width", `${nextWord.offsetWidth}px`);
      }, 1500);
      return () => clearInterval(interval);
    },[])
  return (
    <div className="logo-container">
      <h1 className="words-wrapper">
      <span className="css">Expertise</span> in  &nbsp;
      <span className="words">
      <span className="current" data-bg-color="#ffc703" data-color="#000">React</span>
      <span className="next" data-bg-color="#004e98" data-color="#fff">TypeScript</span>
      <span data-bg-color="#e2c044" data-color="#000">Django</span>
      <span data-bg-color="#8cb369" data-color="#000">Python</span>
      <span data-bg-color="#104911" data-color="#fff">HTML</span>
      <span data-bg-color="#b8c0ff" data-color="#000">CSS</span>
      <span data-bg-color="#e71d36" data-color="#fff">Javascript</span>
      <span className = "" data-bg-color="#065a82" data-color="#fff">Django&nbsp;REST</span>
      <span className = "" data-bg-color="#065a82" data-color="#fff">REST&nbsp;API</span>
    </span>
    </h1>
    </div>
  )
}

export default Index;