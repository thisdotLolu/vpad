'use client'
import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import Input from '../ui/Input';
import { Checkbox } from '@nextui-org/react';
import Button from '../ui/Button';


function CreateComponent() {
    const [uploads, setUploads] = useState<string[]>([]);
    return (
        <div className='mx-auto min-h-screen bg-[#0b0c0d] pt-[100px] w-full px-10'>
            <p className=' text-[1.5rem]'>Create</p>
            <hr />
            <div className='py-5 flex gap-10 items-start'>
                <div className='w-full'>
                    <ImageUploader
                        setUploads={setUploads}
                        uploads={uploads}
                    />
                </div>

                <div className='w-[100%]'>
                    <Input
                        label='Title'
                        placeholder='Add a title'
                        inputContainerClassName='mb-4'
                    />
                    <Input
                        label='Description'
                        placeholder='Add a description'
                        inputContainerClassName='mb-4'
                    />
                    <Input
                        label='Title'
                        placeholder='Add a title'
                        inputContainerClassName='mb-4'
                    />
                    <Input
                        label='Title'
                        placeholder='Add a title'
                    />
                    <div className='mt-4'>

                        <Checkbox
                            className='text-white '
                        > </Checkbox> NSFW content?
                    </div>

                    <Button
                    buttonClassName='w-fit mt-4 rounded-full'
                    >
                        Submit
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CreateComponent