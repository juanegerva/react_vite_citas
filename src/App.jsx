import { useState, useEffect} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList";

function App() {

  const [patients, setPatients] = useState([])
  const [elpaciente, setElpaciente] = useState({})

  // Chequear que el Local Storage queda en el estado inicial
  useEffect(()=>{
    const obtenerLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? []
      setPatients(patientsLS)
    }
    obtenerLocalStorage()
  }, [])
  
  //Guardar datos del LocalStorage
  useEffect(()=> {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  
  //Eliminar 
  const eliminarPatient = (id) => {
    const pacientesActualizados = patients.filter(patient => patient.id !== id)
    setPatients(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20 ">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients} 
          setPatients={setPatients}
          elpaciente={elpaciente} 
          setElpaciente={setElpaciente}
        />
        <PatientList 
          patients={patients}
          setElpaciente={setElpaciente}
          eliminarPatient={eliminarPatient} 
        />
      </div>
    </div>
  );
}

export default App
