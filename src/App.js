
import { useState } from 'react';

import { useSelector } from 'react-redux';
import './App.css';
import Header from "./components/Header";
import Content from './components/Content';

import { helpBtn, updateBtn } from './redux/preSlice';
import { useDispatch } from "react-redux";




import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'





function App() {

  const items = useSelector(state => state.pre.items[0].title)

  const [btn, setBtn] = useState(false)
  const dispatch = useDispatch()

  const divStyle = {
    backgroundColor: '#ffdd67',
    width: '100%',
    height: '80%',
  }

  function handleClick() {
    if (btn == false) {
      dispatch(helpBtn())
      setBtn(true)
    }
    if (btn == true) {
      dispatch(updateBtn())
      setBtn(false)
    }
  }

  return (
    <div className="verse">
      <button className="help-btn" onClick={() => { handleClick() }}>?</button>
      <Header className='header' />
      <div className="App">
        <Content />
        <ReactMarkdown className='markdown' children={items} remarkPlugins={[remarkGfm]} />
      </div>
    </div>

  );
}

export default App;
