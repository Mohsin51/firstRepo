import './App.css';

function App() {
  const heading={
    textAlign: 'center',
    margin: '30px 0',
    fontFamily: 'sans-serif',
    color: 'orange'
  }
  const main={
    backgroundColor: '#ffff',
  borderRadius: '50px',
  fontFamily: 'sans-serif',
  margin: '0 300px',
  width: '900px'
  }
  const text={
    textAlign: 'center',
  justifyContent: 'center',
  padding: '10px',
  fontSize: '60px',
  fontFamily: 'sans-serif'

  }
  const span={
  fontFamily: 'sans-serif'
  }
  const time=new Date(2021,11,26,24); //if arguments are removed then it will work according to current time 
  const curtime=time.getHours();
  let greeting='';
  let greetstyle={};
  if(curtime >= 1 && curtime < 12)
  {
    greeting='Good Morning';
    greetstyle.color="green";
  }
  else if(curtime >=12 && curtime <= 18 )
  {
    greeting='Good Afternoon';
    greetstyle.color="orange"

  }
  else
  {
    greeting='Good Night';
    greetstyle.color="gray"
  }

  return (
    <>
    
      <h1 style={heading}>GREETINGS  </h1>
      <div style={main}>
      <p style={text}>Hello Sir!<span style={span} style={greetstyle}> {greeting}</span> 😄 👍</p>
      </div>
    </>
  );
}

export default App;