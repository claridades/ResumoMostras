import { BsDownload } from 'react-icons/bs'

const DownloadPDFButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2 text-[14px] md:text-[18px] font-semibold text-blue-400 bg-white rounded h-min print:hidden"
    >
      <BsDownload className="text-blue-400" /> Baixar PDF
    </button>
  )
}

export default DownloadPDFButton
