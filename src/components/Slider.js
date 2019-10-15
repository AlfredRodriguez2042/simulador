import React from 'react'
import Slider, { Range } from 'rc-slider'
import Buttons, { ButtonLink } from './Buttons'
import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';


const RSlider = () => {
    const [ useValue, setValue ] = React.useState(19500)
    const [ usePlazo, setPlazo ] = React.useState(16)

    const total = ()=>{
        const states = useValue/usePlazo
        const format = new Intl.NumberFormat('es-mx').format(states)
        return format
    }
    const valor = ()=>{
        const istate = new Intl.NumberFormat('de-DE').format(useValue)
       return istate
    }
    const traer = ()=>{ 
        const markText = document.getElementsByClassName('rc-slider-mark-text')
        const cambio1 = markText[0].innerHTML = '$5.000'
        const cambio2 = markText[1].innerHTML = '$50.000'

        return console.log(cambio1)

    }  
    React.useEffect(()=>{ traer()},[])      
    
        
    return (
        <div className="content-slider">
            <div className="slider">
            <div className="title"> <h2>Simula tu credito</h2> </div>
       <form>
           <div className="content">
               <div className="imput">
           <label > MONTO TOTAL</label>
           <input type="text" name="total" value={`$${valor()}`} readOnly/>
           </div>
           <Slider
           className="range"
           min={5000}
           max={50000}
           marks={{5000:5000, 50000:50000}}
          // step={5}
           value={useValue}
           onChange={value=>setValue(value)}
           />
           </div>
           
            <div className="content">
                <div className="imput">
           <label> PLAZO</label>
           <input type="number" name="plazo" value={usePlazo} />
           </div>
           <Slider
           className="range"
           min={3}
           max={24}
           marks={{3:3,24:24}}
           value={usePlazo}
           onChange={value=>setPlazo(value)}
           />
           
             </div>

           <div className="content">
              <div className="total">
             <h3> CUOTA FIJA POR MES</h3>
             <h1> <span>$</span>{total()} </h1>
              </div>
              <div className="buttons">
              <ButtonLink
              color='btn-fll'
              content='OBTENE CREDITO'
              />
              <ButtonLink
              color='link'
              url='#'
              content='VER DETALLE DE CUOTAS'
              />
              </div>
           </div>
       </form>
           </div>
       </div>
    )
}

export default RSlider
