import { InputField } from '@/components/common/input-field';
import { LoadingButton } from '@/components/common/loading-button';
import { TiptapEditor } from '@/components/common/text-editor';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MultiSelector, MultiSelectorContent, MultiSelectorInput, MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger } from '@/components/ui/multi-select';
import { useForm } from 'react-hook-form';

export const CreatePost = () => {
    const form = useForm();
    return (
        <Form {...form}>
            <form className="space-y-6">
                <FormField
                    name='title'
                    control={form.control}
                    render={({ field }) => (
                        <InputField {...field} label="Title" isRequired />
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8023003758"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select your framework</FormLabel>
                            <FormControl>
                                <MultiSelector
                                    values={field.value}
                                    onValuesChange={field.onChange}
                                    loop
                                    className="max-w-xs"
                                >
                                    <MultiSelectorTrigger>
                                        <MultiSelectorInput placeholder="Select languages" />
                                    </MultiSelectorTrigger>
                                    <MultiSelectorContent>
                                        <MultiSelectorList>
                                            <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
                                            <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                                            <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
                                        </MultiSelectorList>
                                    </MultiSelectorContent>
                                </MultiSelector>
                            </FormControl>
                            <FormDescription>Select multiple options.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name='description'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <span className="text-red-500">&nbsp;*</span>
                            <FormControl>
                                <TiptapEditor onChange={field.onChange} content={field.value} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='flex gap-2 w-full items-end justify-end'>
                    <LoadingButton>Save As Draft</LoadingButton>
                    <LoadingButton>Save</LoadingButton>
                </div>
            </form>
        </Form>
    )
}

