import React from 'react'

import HorizontalAlignCenterIcon from '../icons/v3/horizontal-align-center'
import VerticalAlignCenterIcon from '../icons/v3/vertical-align-center'
import MenuDotsHorizontal from '../icons/v3/menu-dots-horizontal'
import MenuDotsVerticalIcon from '../icons/v3/menu-dots-vertical'
import ArrowSmallRightIcon from '../icons/v3/arrow-small-right'
import AvaAulaOnlineIcon from '../icons/v3/ava-aula-online-icon'
import ArrowSmallLeftIcon from '../icons/v3/arrow-small-left'
import ShortQuoteIcon from '../icons/v3/short-quote-icon'
import ArrowSmallDownIcon from '../icons/v3/arrow-small-down'
import AvaActivityIcon from '../icons/v3/ava-activity-icon'
import AvaCommentsIcon from '../icons/v3/ava-comments-icon'
import MultipleFilesIcon from '../icons/v3/multiple-files'
import PlusCircleIcon from '../icons/v3/plus-circle-icon'
import FileDocumentIcon from '../icons/v3/file-document'
import CheckCircleIcon from '../icons/v3/check-circle'
import DragAndDropIcon from '../icons/v3/drag-and-drop'
import MaisConasemsIcon from '../icons/v3/maisconasems'
import Arrow2RightIcon from '../icons/v3/arrow2-right'
import RotateRightIcon from '../icons/v3/rotate-right'
import ArrowSmallUp from '../icons/v3/arrow-small-up'
import CalendarIcon from '../icons/v2/calendar-icon'
import MenuBurgerIcon from '../icons/v3/menu-burger'
import LongQuoteIcon from '../icons/v3/long-quote'
import RotateLeftIcon from '../icons/v3/rotate-left'
import Arrow2DownIcon from '../icons/v3/arrow2-down'
import BulletListIcon from '../icons/v3/bullet-list'
import NumberListIcon from '../icons/v3/number-list'
import Arrow2LeftIcon from '../icons/v3/arrow2-left'
import AvaVideoIcon from '../icons/v3/ava-video-icon'
import AvaFileIcon from '../icons/v3/ava-file-icon'
import AvaBookIcon from '../icons/v3/ava-book-icon'
import AvaMicIcon from '../icons/v3/ava-mic-icon'
import ArrowDownIcon from '../icons/v3/arrow-down'
import ArrowLeftIcon from '../icons/v3/arrow-left'
import AttentionIcon from '../icons/v3/attention'
import EducationIcon from '../icons/v3/education'
import MoveFileIcon from '../icons/v3/move-file'
import UnpublishIcon from '../icons/v3/unpublish'
import LocationIcon from '../icons/v3/location'
import Arrow2UpIcon from '../icons/v3/arrow2-up'
import SettingsIcon from '../icons/v3/settings'
import DownloadIcon from '../icons/v3/download'
import ZoomOutIcon from '../icons/v3/zoom-out'
import ComputerIcon from '../icons/v3/computer'
import CollapseIcon from '../icons/v3/collapse'
import SurveyIcon from '../icons/v3/survey-icon'
import KeyboardIcon from '../icons/v3/keyboard'
import CheckIcon from '../icons/v3/chack-icon'
import BlankIcon from '../icons/v3/blank-icon'
import Filter2Icon from '../icons/v3/filter2'
import GridIcon from '../icons/v3/grid-icon'
import ConasemsIcon from '../icons/v3/conasems'
import ZoomInIcon from '../icons/v3/zoom-in'
import ReadingIcon from '../icons/v3/reading'
import MessageIcon from '../icons/v3/message'
import PublishIcon from '../icons/v3/publish'
import ArrowUpIcon from '../icons/v3/arrow-up'
import ProfileIcon from '../icons/v3/profile'
import ExpandIcon from '../icons/v3/expand'
import FilterIcon from '../icons/v3/filter'
import FolderIcon from '../icons/v3/folder'
import LaptopIcon from '../icons/v3/laptop'
import MostraIcon from '../icons/v3/mostra'
import MobileIcon from '../icons/v3/mobile'
import PeopleIcon from '../icons/v3/people'
import TableIcon from '../icons/v3/table'
import SearchIcon from '../icons/v3/search'
import ReportIcon from '../icons/v3/report'
import VideoIcon from '../icons/v3/video'
import ImageIcon from '../icons/v3/image'
import TrashIcon from '../icons/v3/trash'
import ClockIcon from '../icons/v3/clock'
import ColorIcon from '../icons/v3/color'
import CropICon from '../icons/v3/crop'
import FileIcon from '../icons/v3/file'
import EditIcon from '../icons/v3/edit'
import FormIcon from '../icons/v3/form'
import HideIcon from '../icons/v3/hide'
import InfoIcon from '../icons/v3/info'
import ViewIcon from '../icons/v3/view'
import PlusIcon from '../icons/v3/plus'
import CodeIcon from '../icons/v3/code'
import ModalIcon from '../icons/v3/modal'
import H1Icon from '../icons/v3/h1-icon'
import H2Icon from '../icons/v3/h2-icon'
import H3Icon from '../icons/v3/h3-icon'
import Avatar from '../icons/v3/avatar'
import Payment from '../icons/v3/payment'
import ForumIcon from '../icons/v3/forum'
import DownloadFile from '../icons/v3/download-file'
import FormEdit from '../icons/v3/form-edit'

type Props = {
  className?: string
  type: SimoaIconType
}

const SimoaIcon = ({ type, className }: Props) => {
  switch (type) {
    case 'arrow-down':
      return <ArrowDownIcon className={className} />

    case 'arrow-left':
      return <ArrowLeftIcon className={className} />

    case 'arrow-right':
      return <Arrow2RightIcon className={className} />

    case 'arrow-small-down':
      return <ArrowSmallDownIcon className={className} />

    case 'arrow-small-left':
      return <ArrowSmallLeftIcon className={className} />

    case 'arrow-small-right':
      return <ArrowSmallRightIcon className={className} />

    case 'arrow-small-up':
      return <ArrowSmallUp className={className} />

    case 'arrow-up':
      return <ArrowUpIcon className={className} />

    case 'arrow2-down':
      return <Arrow2DownIcon className={className} />

    case 'arrow2-left':
      return <Arrow2LeftIcon className={className} />

    case 'arrow2-right':
      return <Arrow2RightIcon className={className} />

    case 'arrow2-up':
      return <Arrow2UpIcon className={className} />

    case 'attention':
      return <AttentionIcon className={className} />

    case 'calendar':
      return <CalendarIcon className={className} />

    case 'check-circle':
      return <CheckCircleIcon className={className} />

    case 'clock':
      return <ClockIcon className={className} />

    case 'collapse':
      return <CollapseIcon className={className} />

    case 'color':
      return <ColorIcon className={className} />

    case 'computer':
      return <ComputerIcon className={className} />

    case 'conasems':
      return <ConasemsIcon className={className} />

    case 'crop':
      return <CropICon className={className} />

    case 'download':
      return <DownloadIcon className={className} />

    case 'drag-and-drop':
      return <DragAndDropIcon className={className} />

    case 'edit':
      return <EditIcon className={className} />

    case 'education':
      return <EducationIcon className={className} />

    case 'expand':
      return <ExpandIcon className={className} />

    case 'file-document':
      return <FileDocumentIcon className={className} />

    case 'file':
      return <FileIcon className={className} />

    case 'filter':
      return <FilterIcon className={className} />

    case 'folder':
      return <FolderIcon className={className} />

    case 'form':
      return <FormIcon className={className} />

    case 'forum':
      return <ForumIcon className={className} />

    case 'hide':
      return <HideIcon className={className} />

    case 'horizontal-align-center':
      return <HorizontalAlignCenterIcon className={className} />

    case 'image':
      return <ImageIcon className={className} />

    case 'info':
      return <InfoIcon className={className} />

    case 'laptop':
      return <LaptopIcon className={className} />

    case 'location':
      return <LocationIcon className={className} />

    case 'maisconasems':
      return <MaisConasemsIcon className={className} />

    case 'menu-burger':
      return <MenuBurgerIcon className={className} />

    case 'menu-dots-horizontal':
      return <MenuDotsHorizontal className={className} />

    case 'menu-dots-vertical':
      return <MenuDotsVerticalIcon className={className} />

    case 'message':
      return <MessageIcon className={className} />

    case 'mostra':
      return <MostraIcon className={className} />

    case 'move-file':
      return <MoveFileIcon className={className} />

    case 'multiple-files':
      return <MultipleFilesIcon className={className} />

    case 'plus':
      return <PlusIcon className={className} />

    case 'profile':
      return <ProfileIcon className={className} />

    case 'publish':
      return <PublishIcon className={className} />

    case 'reading':
      return <ReadingIcon className={className} />

    case 'report':
      return <ReportIcon className={className} />

    case 'rotate-left':
      return <RotateLeftIcon className={className} />

    case 'rotate-right':
      return <RotateRightIcon className={className} />

    case 'search':
      return <SearchIcon className={className} />

    case 'settings':
      return <SettingsIcon className={className} />

    case 'trash':
      return <TrashIcon className={className} />

    case 'unpublish':
      return <UnpublishIcon className={className} />

    case 'vertical-align-center':
      return <VerticalAlignCenterIcon className={className} />

    case 'video':
      return <VideoIcon className={className} />

    case 'view':
      return <ViewIcon className={className} />

    case 'zoom-in':
      return <ZoomInIcon className={className} />

    case 'zoom-out':
      return <ZoomOutIcon className={className} />
    case 'expand-group':
      return <ExpandIcon className={className} />
    case 'filter2':
      return <Filter2Icon className={className} />
    case 'code':
      return <CodeIcon className={className} />
    case 'mobile':
      return <MobileIcon className={className} />
    case 'keyboard':
      return <KeyboardIcon className={className} />
    case 'table':
      return <TableIcon className={className} />
    case 'bullet-list':
      return <BulletListIcon className={className} />
    case 'number-list':
      return <NumberListIcon className={className} />
    case 'blank':
      return <BlankIcon className={className} />
    case 'grid':
      return <GridIcon className={className} />
    case 'plus-circle':
      return <PlusCircleIcon className={className} />
    case 'survey':
      return <SurveyIcon className={className} />
    case 'modal':
      return <ModalIcon className={className} />
    case 'people':
      return <PeopleIcon className={className} />
    case 'check':
      return <CheckIcon className={className} />
    case 'h1':
      return <H1Icon className={className} />
    case 'h2':
      return <H2Icon className={className} />
    case 'h3':
      return <H3Icon className={className} />
    case 'long-quote':
      return <LongQuoteIcon className={className} />
    case 'short-quote':
      return <ShortQuoteIcon className={className} />
    case 'ava-video':
      return <AvaVideoIcon className={className} />
    case 'ava-file':
      return <AvaFileIcon className={className} />
    case 'ava-book':
      return <AvaBookIcon className={className} />
    case 'ava-activity':
      return <AvaActivityIcon className={className} />
    case 'ava-comments':
      return <AvaCommentsIcon className={className} />
    case 'ava-mic':
      return <AvaMicIcon className={className} />
    case 'ava-aula-online':
      return <AvaAulaOnlineIcon className={className} />
    case 'avatar':
      return <Avatar className={className} />
    case 'payment':
      return <Payment className={className} />
    case 'download-file':
      return <DownloadFile className={className} />
    case 'form-edit':
      return <FormEdit className={className} />
    default:
      return null
  }
}

SimoaIcon.displayName = 'SimoaIcon'
export default SimoaIcon

export type SimoaIconType =
  | 'horizontal-align-center'
  | 'vertical-align-center'
  | 'menu-dots-horizontal'
  | 'menu-dots-vertical'
  | 'arrow-small-right'
  | 'arrow-small-down'
  | 'arrow-small-left'
  | 'arrow-small-up'
  | 'multiple-files'
  | 'ava-aula-online'
  | 'drag-and-drop'
  | 'arrow2-right'
  | 'check-circle'
  | 'ava-activity'
  | 'rotate-right'
  | 'number-list'
  | 'bullet-list'
  | 'file-document'
  | 'ava-comments'
  | 'short-quote'
  | 'arrow-right'
  | 'maisconasems'
  | 'arrow2-left'
  | 'arrow-left'
  | 'long-quote'
  | 'ava-video'
  | 'arrow2-down'
  | 'plus-circle'
  | 'ava-file'
  | 'menu-burger'
  | 'expand-group'
  | 'rotate-left'
  | 'arrow2-up'
  | 'arrow-down'
  | 'ava-book'
  | 'unpublish'
  | 'attention'
  | 'move-file'
  | 'calendar'
  | 'settings'
  | 'zoom-out'
  | 'zoom-in'
  | 'publish'
  | 'ava-mic'
  | 'keyboard'
  | 'location'
  | 'download'
  | 'modal'
  | 'education'
  | 'reading'
  | 'conasems'
  | 'computer'
  | 'collapse'
  | 'profile'
  | 'arrow-up'
  | 'message'
  | 'survey'
  | 'search'
  | 'people'
  | 'report'
  | 'mostra'
  | 'laptop'
  | 'expand'
  | 'video'
  | 'blank'
  | 'folder'
  | 'mobile'
  | 'filter'
  | 'trash'
  | 'filter2'
  | 'image'
  | 'grid'
  | 'view'
  | 'table'
  | 'plus'
  | 'info'
  | 'code'
  | 'check'
  | 'form'
  | 'file'
  | 'edit'
  | 'crop'
  | 'color'
  | 'clock'
  | 'hide'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'avatar'
  | 'payment'
  | 'forum'
  | 'download-file'
  | 'form-edit'
