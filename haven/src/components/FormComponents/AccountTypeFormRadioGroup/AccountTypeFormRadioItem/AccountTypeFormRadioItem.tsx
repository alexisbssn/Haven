import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { UserType } from "@/types"

type Props = {
	value: UserType
    labelValue: string
}
export default function AccountTypeFormRadioItem({ value, labelValue }: Props) {
	return (
		<div className="flex items-center">
			<RadioGroupItem value={value}/>
			<Label className="ml-2 font-normal text-sm">{labelValue}</Label>
		</div>
	)
}
