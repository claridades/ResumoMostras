import { useRouter } from 'next/router'

import formatDate from 'shared/lib/helpers/formatDate'
import AwaitFor from 'shared/components/await-for'
import Fetch from 'shared/components/fetch'
import Link from 'shared/components/link'
import DownloadPDFButton from 'components/download-pdf-button'
import EditExp from 'components/edit-exp'
import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

const Imunizasus2024Resume = () => {
  const router = useRouter()
  const mostraSlug = router.query['mostra']
  const experienceId = router.query['experienciaId']
  const [open, setOpen] = useState(false)

  return (
    <AwaitFor dependencies={[experienceId]}>
      <Fetch
        service="mostras"
        path={`mostras/experiencias/${experienceId}`}
        render={({ data }) => {
          const experiencia = data
          const formatedCPF = experiencia?.authorCpf
            ?.replace(/[^\d]/g, '')
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
          const hideSensitiveData = false

          return (
            <div className="container w-full p-0 px-4 mx-auto mt-10 mb-6 lg:px-0 lg:pt-8 lg:pb-24 ">
              <div className="flex items-baseline justify-between">
                <div>
                  <h1 className="mx-0 mb-8 text-[24px] md:text-[32px] font-semibold lg:mx-0 xl:mb-10">
                    Resumo
                  </h1>
                </div>
                <div className="flex">
                  <DownloadPDFButton />
                  <EditExp />
                </div>
              </div>
              <h2 className="mx-0 mb-4 text-[18px] font-semibold lg:mx-0 lg:mb-10 border-b border-[#ACACAC] gap-4">
                Identificação
              </h2>
              <div className="flex flex-wrap mx-0 mb-4 gap-9 lg:gap-0 lg:mb-10 lg:mx-0 lg:pb-6 ">
                <div className="md:w-4/12">
                  <h3 className="mb-2 font-sans text-lg ">Estado</h3>
                  <p className="mb-2 lg:mb-6 ">
                    {experiencia?.municipio && `${experiencia?.uf}`}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-lg ">Município</h3>
                  <p className="mb-2 lg:mb-6 ">
                    {experiencia?.municipio && `${experiencia?.municipio}`}
                  </p>
                </div>
              </div>
              <h2 className="mx-0 mb-4 text-xl font-semibold lg:mx-0 border-b-[1px] border-[#ACACAC]">
                Autor(a) principal
              </h2>
              <div className="flex flex-wrap justify-between gap-6 mx-4 mb-4 lg:w-full lg:gap-0 lg:mx-0 lg:mb-10">
                <div className="mr-4 lg:mr-0">
                  <h3 className="mb-2 text-lg font-semibold">Nome</h3>
                  <p className="mb-4">{experiencia?.authorFullname}</p>
                </div>
                <div className="mr-4 lg:mr-0">
                  <h3 className="mb-2 text-lg font-semibold">E-mail</h3>
                  <p className="mb-4">{experiencia?.email}</p>
                </div>

                <div className="mr-20 lg:mr-0">
                  <h3 className="mb-2 text-lg font-semibold">CPF</h3>
                  <p className="mb-4">{formatedCPF}</p>
                </div>

                <div className="">
                  <h3 className="mb-2 text-lg font-semibold">Telefone</h3>
                  <p className="mb-4">
                    {experiencia?.phone
                      ?.replace(/[^\d]/g, '')
                      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3')}
                  </p>
                </div>
              </div>
              {/* Fazer validação para mostrar coautores apenas se tiver coautores */}
              {!!experiencia?.coAutores?.length && (
                <div className="last-of-type:border-none">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex mb-6 border-b-[1px] border-silver-300 items-start justify-between w-full xl:mb-8 focus:outline-none"
                  >
                    <div className="flex items-center gap-0 md:gap-4 pb-7">
                      <MdExpandMore
                        className={`text-[#35373B] transition-all duration-300 transform text-3xl min-w-[24px] ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                      <h2 className="mx-4 text-xl font-semibold lg:mx-0 ">
                        Coautores
                      </h2>
                    </div>
                  </button>
                  {open && (
                    <table className="w-full mb-6 lg:mb-8 lg:w-5/12">
                      <thead>
                        <tr className="text-left ">
                          <th>Nome Social</th>
                          {!hideSensitiveData && <th>CPF</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {experiencia?.coAutores?.map(
                          (
                            coautor: { nome: string; cpf: string },
                            idx: number
                          ) => (
                            <tr
                              className="pt-6 text-left"
                              key={coautor?.nome + idx}
                            >
                              <td className="py-6">{coautor.nome}</td>
                              {!hideSensitiveData && (
                                <td className="py-6">
                                  {coautor?.cpf
                                    ?.replace(/[^\d]/g, '')
                                    .replace(
                                      /(\d{3})(\d{3})(\d{3})(\d{2})/,
                                      '$1.$2.$3-$4'
                                    )}
                                </td>
                              )}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              <h2 className="mb-4 text-xl font-semibold lg:mx-0 lg:mb-10">
                Descrição da experiência
              </h2>
              <div className="">
                <h3 className="mb-2 text-lg font-semibold">Título:</h3>
                <p className="mb-8">{experiencia?.title}</p>
                <h3 className="mb-2 text-lg font-semibold">
                  Introdução e caracterização do município
                </h3>
                <p className="mb-8">{experiencia?.introducao}</p>
                <h3 className="mb-2 text-lg font-semibold">
                  Descrição dos problemas enfrentados
                </h3>
                <p className="mb-8">{experiencia?.resumo}</p>
                <h3 className="mb-2 text-lg font-semibold">
                  Relato da experiência e seus resultados:
                </h3>{' '}
                <p className="mb-8">{experiencia?.resultados}</p>
                <h3 className="mb-2 text-lg font-semibold">
                  {' '}
                  Conclusão e considerações finais
                </h3>
                <p className="mb-8">{experiencia?.conclusao}</p>
                {!!experiencia?.youtubeVideo && (
                  <>
                    <h3 className="mb-2 text-lg font-semibold">Link Vídeo:</h3>
                    <a
                      href={experiencia?.youtubeVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-6"
                    >
                      {' '}
                      <p className="mb-8 underline text-primary">
                        {experiencia?.youtubeVideo}
                      </p>{' '}
                    </a>
                  </>
                )}
                {experiencia?.files?.length > 0 && (
                  <>
                    <h3 className="mb-2 text-lg font-semibold">Arquivo:</h3>
                    {experiencia?.files?.map((item: any) => {
                      return (
                        <a
                          key={item.file}
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-16"
                        >
                          <span className="mb-8 underline text-primary">
                            {item?.split('/').pop()}
                          </span>
                        </a>
                      )
                    })}
                  </>
                )}
              </div>

              <Link
                href={`/mostras/${mostraSlug}/experiencias`}
                className="flex px-5 py-2 font-sans font-semibold text-center text-white bg-blue-400 border rounded"
              >
                Ver todas as experiências inscritas
              </Link>
            </div>
          )
        }}
      />
    </AwaitFor>
  )
}

export default Imunizasus2024Resume
