import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {ImageMovie} from "../../@types/ImageMovie";

export default function StandardImageList(imageData: ImageMovie[], path: string) {
    return (
        <ImageList sx={{width: 500, height: 450}} cols={2} rowHeight={164}>
            {imageData.map((item, index) => (
                <ImageListItem key={index}>
                    <img
                        src={path + item.file_path}
                        alt={"image film"}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}