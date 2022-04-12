import Patient from "./Patient";

const PatientList = ({patients, setElpaciente, eliminarPatient}) => {
 
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-3">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>

          {patients.map((paciente) => (
            <Patient 
              key={paciente.id} 
              paciente={paciente} 
              setElpaciente={setElpaciente}
              eliminarPatient={eliminarPatient}
              />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-5 text-center mb-10">
            Agrega y Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>

        </>
      )}
    
    </div>
  );
}

export default PatientList
