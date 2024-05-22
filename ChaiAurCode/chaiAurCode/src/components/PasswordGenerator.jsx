import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGenerator() {

  const [passPeram, setPassPeram] = useState({
    length : 8,
    number : false,
    symbol : false
  })
  const [password, setPassword] = useState("fdfgg");
  const passwordRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
      const password = makePasswordUtility();
      setPassword(password);
      btnRef.current.textContent = "Copy";
      
  }, [passPeram])


  const copyPassword = (e) => {
    window.navigator.clipboard.writeText(password);
    e.target.textContent = "Copied";
  }



  const handleRangeChange = (e) => {
    const num = Number(e.target.value);
    setPassPeram(p => ({...p, length: num}))
  }

  const handleNumberCheckChange = (e) => {
    const isChecked = (e.target.checked);
    setPassPeram(p => ({...p, number: isChecked}));
    
  }

  const handleSymbolCheckChange = (e) => {
    const isChecked = (e.target.checked);
    setPassPeram(p => ({...p, symbol: isChecked}));
    
  }

  const makePasswordUtility = () => {
    let password = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    if (passPeram.number) chars+=numbers;
    if (passPeram.symbol) chars+= symbols;

    console.log(chars)
    for (let i = 0; i < passPeram.length; i++){
      password += chars.charAt(Math.floor(Math.random() * chars.length));
      
    }
    return password;
  };


  return (
    <div className="font-sans rounded-lg bg-slate-800 max-w-[800px] text-xl w-full py-6 px-10 text-white flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center">Password Generator</h1>
      <div className="grid grid-cols-4 gap-3">
      <input ref={passwordRef} className="text-white p-2 px-4 col-span-3 text-2xl rounded-s-lg" value={password} type="text" disabled/>
      <button id="copyBtn" ref={btnRef} onClick={copyPassword} className="bg-slate-600 rounded-e-lg hover:bg-slate-400 transition-all">Copy</button>
      </div>
      <div className="flex justify-between">

        <div className="w-[40%] flex justify-around">
          <label htmlFor="passwordLength">Length({passPeram.length})</label>
          <input value={passPeram.length} onChange={handleRangeChange} className="w-[70%]" type="range" name="" id="passwordLength" min={6} max={20} />
        </div>

        <div>
        <label className="mr-2" htmlFor="number">Include number</label>
        <input checked={passPeram.number} onChange={handleNumberCheckChange} type="checkbox" name="" id="number" />
        </div>

        <div>
        <label className="mr-2" htmlFor="symbol">Include symbol</label>
        <input checked={passPeram.symbol} onChange={handleSymbolCheckChange} type="checkbox" name="" id="symbol" />
        </div>
       
      </div>
    </div>
  )
}

export default PasswordGenerator
