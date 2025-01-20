"use client"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField
} from "@/components/ui/form"
import { Plus, Trash2 } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"

export default function CreatePoll() {
  const form = useForm({
    defaultValues: {
      title: "",
      test: [{
        lastName: ""
      }]
    },
  })

  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control: form.control,
    name: "test",
    rules: {
      minLength: 1
    }
  });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((onSubmit) => console.log(onSubmit))} className="w-2/3 space-y-4">
        <FormField
          name='title'
          control={form.control}
          render={({ field }) => (
            <InputField {...field} label="Title" isRequired />
          )}
        />

        <div className="space-y-2 w-full">
          <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Options <span className="text-red-500">&nbsp;*</span></div>
          {fields.map((item, index) => {
            return (
              <div className="flex gap-2 my-0 w-full">
                <FormField
                  key={item.id}
                  control={form.control}
                  name={`test.${index}.lastName`}
                  render={({ field }) => (
                    <div className="w-full">
                      <InputField {...field} className="w-full" />
                    </div>
                  )}
                />
                <Button type="button" onClick={() => {
                  //do not allowed delete if there is only one field
                  if (fields.length === 1) {
                    return;
                  }
                  remove(index);
                }}>
                  <Trash2 />
                </Button>
              </div>
            );
          })}
        </div>

        <Button className="block" type="button" onClick={() => append({ lastName: "" })}><Plus /></Button>
        <div className="flex justify-end w-full al">
          <LoadingButton type="submit">Save</LoadingButton>
        </div>
      </form>
    </Form>
  )
}
