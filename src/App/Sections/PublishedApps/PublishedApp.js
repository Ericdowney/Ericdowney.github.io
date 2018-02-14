import React, { Component } from "react";
import { ImageContentSection } from '../../General/ContentSections/ContentSection';
import imageBmrCalculator from '../../Graphics/icon_bmrCalculator.svg';
import imageFearApp from '../../Graphics/icon_fearApp.svg';
import imageColorPalette from '../../Graphics/icon_colorPalette.svg';

export default class PublishedApp extends Component {
    render() {
        return (
            <div>
                <ImageContentSection headingColor='blue' heading='PUBLISHED APPS'
                    items={[{
                        id: 1, headingColor: 'orange', subHeading: 'BMR Calculator',
                        imgRef: imageBmrCalculator,
                        iOSIcon: true,
                        imgAlt: 'temp',
                        primaryBody: 'This simple, easy-to-use interface calculates your BMR. What is BMR? That’s simple, your basal metabolic rate is an estimation of how many calories your body would burn while at rest for a full day.',
                        secondaryBody: 'In this app, we guide you through entering your height, weight, age, and gender to provide you with your BMR. In the last step of this calculator, you can see how different activity levels and your BMR affect the amount of calories you should consume. To make these calculations, we use the standard Harris Benedict Equation.'
                    }
                    ,
                    {
                        id: 2, headingColor: 'orange', subHeading: 'Phobias: A list of all fears',
                        imgRef: imageFearApp,
                        iOSIcon: true,
                        imgAlt: 'temp',
                        primaryBody: 'Coming soon to an app store near you!'
                    },
                    {
                        id: 3, headingColor: 'orange', subHeading: 'Swatches',
                        imgRef: imageColorPalette,
                        iOSIcon: true,
                        imgAlt: 'temp',
                        primaryBody: 'Coming soon to an app store near you!'
                     }
                    ]} />
            </div>
        );
    }
}