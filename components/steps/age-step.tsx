"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"

interface AgeStepProps {
  value: string
  onChange: (value: string) => void
  onNext: () => void
  onBack: () => void
}

export function AgeStep({ value, onChange, onNext, onBack }: AgeStepProps) {
  const options = [
    { value: "21-40", label: "21-40 years old" },
    { value: "41-50", label: "41-50 years old" },
    { value: "51+", label: "Over 51 years" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How old are you?</h2>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        {options.map((option) => (
          <Card
            key={option.value}
            className={`border-2 ${value === option.value ? "border-emerald-600" : "border-gray-200"} rounded-[4px] cursor-pointer hover:border-emerald-600/70 transition-colors`}
          >
            <CardContent className="p-0">
              <Label htmlFor={option.value} className="flex items-center p-4 cursor-pointer">
                <RadioGroupItem value={option.value} id={option.value} className="mr-3" />
                <span>{option.label}</span>
              </Label>
            </CardContent>
          </Card>
        ))}
      </RadioGroup>

      <div className="pt-6 flex flex-col space-y-3">
        <Button
          onClick={onNext}
          disabled={!value}
          className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-[4px]"
        >
          Continue
        </Button>

        <button onClick={onBack} className="flex items-center justify-center text-gray-600 hover:text-gray-900">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </button>
      </div>
    </div>
  )
}

