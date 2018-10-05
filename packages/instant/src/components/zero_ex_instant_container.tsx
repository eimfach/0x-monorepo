import * as React from 'react';

import { ColorOption } from '../style/theme';

import { BuyButton } from './buy_button';
import { InstantHeading } from './instant_heading';
import { OrderDetails } from './order_details';
import { Container, Flex, Text } from './ui';

export interface ZeroExInstantContainerProps {}

export const ZeroExInstantContainer: React.StatelessComponent<ZeroExInstantContainerProps> = props => (
    <Container hasBoxShadow={true} width="350px" backgroundColor={ColorOption.white}>
        <Flex direction="column" justify="flex-start">
            <InstantHeading />
            <OrderDetails />
            <BuyButton />
        </Flex>
    </Container>
);
