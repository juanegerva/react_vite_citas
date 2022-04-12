import {useState, useEffect} from 'react';
import Error from './Error';

const Form = ({patients, setPatients, elpaciente, setElpaciente}) => {
  const [patient, setPatient] = useState("")
  const [osocial, setOsocial] = useState("")
  const [email, setEmail] = useState("")
  const [alta, setAlta] = useState("")
  const [consulta, setConsulta] = useState("")

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(elpaciente).length > 0) {
      setPatient(elpaciente.patient)
      setOsocial(elpaciente.osocial)
      setEmail(elpaciente.email)
      setAlta(elpaciente.alta)
      setConsulta(elpaciente.consulta)
    }
  }, [elpaciente])

  

  // Funcion para generar un ID unico en cada elemento del array
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
 
 const handleSubmit = (e) => {
   e.preventDefault()

   // Validacion de Formulario
  if([patient, osocial, email, alta, consulta].includes("")){
    setError(true)
    return
  } 

  setError(false)
  // Creamoa un objeto paciente para pasar por Props
    const objectPatient = {
      patient,
      osocial,
      email,
      alta,
      consulta,
    };

    if(elpaciente.id){
      //Editando el registro
      objectPatient.id = elpaciente.id

      const newPatients = patients.map(patientState => patientState.id === elpaciente.id ? objectPatient : patientState)
      setPatients(newPatients)
      setElpaciente({})
      
    } else {
      //Nuevo Registro
      objectPatient.id = generarId()
      setPatients([...patients, objectPatient])
    }
    
    //Reiniciamos el formulario
    setPatient("")
    setOsocial("")
    setEmail("")
    setAlta("")
    setConsulta("")
  }

  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Paciente</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añadir Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="Todos los campos son obligatorios" />} 
        
        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nompre Paciente
          </label>

          <input
            id="paciente"
            type="text"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="osocial"
            className="block text-gray-700 uppercase font-bold"
          >
            Cobertura medica
          </label>

          <input
            id="osocial"
            type="text"
            placeholder="Cobertura médica"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={osocial}
            onChange={(e) => setOsocial(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}

          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="tratamiento"
            className="block text-gray-700 uppercase font-bold"
          >
            Motivo Consulta
          </label>

          <textarea
            id="tratamiento"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describir motivo de la consulta"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 rounded-lg text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition duration-300 ease-in-out"
          value={elpaciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Form
