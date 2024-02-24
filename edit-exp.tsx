import { useRouter } from 'next/router'
import FormEdit from 'shared/components/icons/v3/form-edit'
import Link from 'shared/components/link'

const EditExp = () => {
  const router = useRouter()
  const mostraSlug = router.query.mostra
  const experienciaId = router.query.experienciaId

  return (
    <Link
      href={`/mostras/${mostraSlug}/experiencias/${experienciaId}/editar?step=1`}
      className="flex items-center gap-2 px-4 py-2 text-[14px] md:text-[18px] font-semibold text-blue-400 bg-white rounded h-min print:hidden"
    >
      <FormEdit className="text-blue-400" /> Editar Experiência
    </Link>
  )
}

export default EditExp
