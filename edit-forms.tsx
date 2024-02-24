import EditExperiencia from 'pages/mostras/[mostra]/experiencias/[experienciaId]/editar'

const EditForms = () => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2 text-[18px] font-semibold text-blue-400 bg-white rounded h-min print:hidden"
    >
      <EditExperiencia className="text-blue-400" /> Editar form
    </button>
  )
}

export default EditForms
