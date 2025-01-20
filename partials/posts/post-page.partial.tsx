'use client';
import { Heading3 } from "@/components/common/typography";
import { Separator } from "@/components/ui/separator";
import { useQueryParams } from "@/hooks/use-query-param.helper";
import CreatePoll from "@/partials/posts/create-poll.partial";
import { CreatePost } from "@/partials/posts/create-post.partial";



const PostPagePartial = () => {
    const tabs = [{
        label: 'Text',
        value: 'text',
        content: <CreatePost />
    },
    {
        label: 'Poll',
        value: 'poll',
        content: <CreatePoll />
    }];

    const { setQueryParams, getSingleParam } = useQueryParams();
    const selectedTab = getSingleParam("post-type");
    const isCorrectTab = tabs.some(tab => tab.value === selectedTab);
    const defaultTab = isCorrectTab ? selectedTab : tabs[0].value;

    const renderContent = () => {
        const activeTabContent = tabs.find(tab => tab.value === defaultTab);
        return activeTabContent ? activeTabContent.content : null;
    };

    return (
        <div className="container mx-auto py-6">
            <div className="mt-6 space-y-3">
                <Heading3>Create Posts</Heading3>
                <div className="nav-heading">
                    <div className="flex space-x-4 font-semibold cursor-pointer">
                        {
                            tabs.map((tab) => {
                                return (
                                    <div key={tab.value} className="mt-4" onClick={() => setQueryParams({
                                        "post-type": tab.value
                                    })}>
                                        {tab.label}
                                        {tab.value === defaultTab && <Separator className="bg-black" />}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Separator />
                </div>
                <div>
                    {renderContent()}
                </div>
            </div>

        </div>
    );
}

export default PostPagePartial