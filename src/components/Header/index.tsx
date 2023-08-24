import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  TitleWrapper,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <TitleWrapper>
          <HeaderTitle>FinancesApp</HeaderTitle>
          <img src={logoImg} alt="" />
        </TitleWrapper>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
