
const P = ({text,color})=>{
    return<p style={{color:color}}>{text.toUpperCase()}</p>
    }
    
P.defaultProps={
    color:'orange'
}


export default P