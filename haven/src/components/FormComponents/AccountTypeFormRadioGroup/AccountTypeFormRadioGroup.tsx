import { RadioGroup } from "@/components/ui/radio-group"
import AccountTypeFormRadioItem from "./AccountTypeFormRadioItem/AccountTypeFormRadioItem"
import { UserType } from "@/types"

type Props = {
  defaultValue: UserType
}

/**
 * This is the radio group to select the account type when signing up
 */
export default function AccountTypeFormRadioGroup({ defaultValue }: Props) {
  return (
    <RadioGroup defaultValue={defaultValue}>
      Account Type
      <AccountTypeFormRadioItem value="supporter" labelValue="Supporter" />
      <AccountTypeFormRadioItem value="refugee" labelValue="Refugee" />
    </RadioGroup>
  )
}
