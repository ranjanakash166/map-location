import './App.css';
import GetCityDetails from './components/getcitydetails';

function App() {
  //const[userDetails,setUserDetails] = useState();

  /*const user = async () => {
    try{
      const userDetail = await axios.get("https://randomuser.me/api");
      //console.log(userDetail.data.results);
      setUserDetails(userDetail.data.results);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    //user();
  },[]);*/

  return (
    <div className="App">
      <GetCityDetails></GetCityDetails>
    </div>
  );
}

export default App;
