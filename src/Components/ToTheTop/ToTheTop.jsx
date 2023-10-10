
import { FiArrowUp } from 'react-icons/fi';
const ToTheTop = () => {
    const handleTop = () =>{
        window.scrollTo(0, 0)
        
    }
    return (
        <div className="flex mr-10 justify-end">
            <button onClick={handleTop} className="btn   btn-success hover:btn-warning   "><FiArrowUp className='text-2xl'></FiArrowUp></button>
        </div>
    );
};

export default ToTheTop;