import { Card, FlexLayout, Skeleton } from "@cedcommerce/ounce-ui";

export function Activitiesskeleton() {
    return (
        <Card>
            <FlexLayout
                halign="fill">
                <Skeleton
                    type="custom"
                    height="25px"
                    width="120px" />
                <Skeleton
                    type="custom"
                    height="25px"
                    width="120px" />
            </FlexLayout>
            <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="loose">
                <FlexLayout
                    halign="fill">
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="120px" />
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="120px" />
                </FlexLayout>
                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="extraTight">
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="100%" />
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="30%" />
                </FlexLayout>
                <hr />
                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="extraTight">
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="100%" />
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="30%" />
                </FlexLayout>
                <hr />
                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="extraTight">
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="100%" />
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="30%" />
                </FlexLayout>
                <hr />
                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="extraTight">
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="100%" />
                    <Skeleton
                        type="custom"
                        height="25px"
                        width="30%" />
                </FlexLayout>
                <hr />
            </FlexLayout>
        </Card>
    );
}