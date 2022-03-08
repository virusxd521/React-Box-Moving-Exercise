
import './Box.css';

const Box = ({theMargin, theLeftMargin}) => {
    return (
        <>  
            <div className='box'
                style={{marginTop: theMargin, marginLeft: theLeftMargin}}
            >
                <p>ssss</p>
                <p>ssss</p>
                <p>ssss</p>
                <p>ssss</p>
            </div>        
        </>
    )
}

export default Box;