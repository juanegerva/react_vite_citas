

const Patient = ({paciente, setElpaciente, eliminarPatient}) => {
  
  const {patient, osocial , email, alta, consulta, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm("¿Estás seguro de eliminar este paciente?")

    if (respuesta) {
      eliminarPatient(id)
    }
  }

  return (
    <div className="mx-3 my-8 bg-white shadow-md  rounded-lg px-5 py-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{patient}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Cobertura Medica: {""}
        <span className="font-normal normal-case">{osocial}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-mail: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Motivo Consulta: {""}
        <span className="font-normal normal-case">{consulta}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold py-2 px-10 rounded-lg mt-5"
          onClick={() => setElpaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-800 text-white uppercase font-bold py-2 px-10 rounded-lg mt-5"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient