import {
  memo,
  useCallback,
} from 'react'
import {
  RiAttachmentLine,
} from '@remixicon/react'
import FileFromLinkOrLocal from '../file-from-link-or-local'
import ActionButton, { ActionButtonState } from '@/app/components/base/action-button'
import cn from '@/utils/classnames'
import type { FileUpload } from '@/app/components/base/features/types'
import { TransferMethod } from '@/types/app'

type FileUploaderInChatInputProps = {
  fileConfig: FileUpload
}
const FileUploaderInChatInput = ({
  fileConfig,
}: FileUploaderInChatInputProps) => {
  const renderTrigger = useCallback((open: boolean) => {
    return (
      <ActionButton
        size='l'
        state={fileConfig?.ClickDisabled ? ActionButtonState.Default : ActionButtonState.Active}
        className={cn(open && 'bg-state-base-hover')}
      >
        <RiAttachmentLine className='w-5 h-5' />
      </ActionButton>
    )
  }, [fileConfig?.ClickDisabled])

  return (
    <FileFromLinkOrLocal
      trigger={renderTrigger}
      fileConfig={fileConfig}
      showFromLocal={fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.local_file)}
      showFromLink={fileConfig?.allowed_file_upload_methods?.includes(TransferMethod.remote_url)}
    />
  )
}

export default memo(FileUploaderInChatInput)
