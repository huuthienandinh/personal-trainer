import { InlineWidget } from 'react-calendly';

export default function Calendly() {
    return (
        <div className="pt-12 px-6 sm:px-0">
            <InlineWidget
                url="https://calendly.com/nirvanaptyoga/15mincall?text_color=315e26&primary_color=c8ddab"
                styles={{
                    height: '875px',
                }}
            />
        </div>
    );
}
