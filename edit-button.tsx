import EditIcon from 'shared/components/icons/v3/edit'

const EditButton = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 font-semibold text-[18px] text-blue-400 bg-white rounded h-min"
    >
      <EditIcon className="text-blue-400" /> Editar experiência
    </button>
  )
}

export default EditButton
