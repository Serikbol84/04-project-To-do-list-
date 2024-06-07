import Pager from './Pager/Pager';
// import Done from './TitlesOfActivity/Done';
// import ToDo from './TitlesOfActivity/ToDo';
// import Trash from './TitlesOfActivity/Trash';
import './main.css';


const Main = () => {
    return (
        <div className="Main">
            <Pager />
            {/* <ToDo />
            <Done />
            <Trash /> */}
          
        </div>
    );
}
 
export default Main;