import { SkillContent } from "@/components/SkillContent";
import {Skill} from "@/constants/skills";

export function SkillList({ items }: { items: Skill[] }) {
    return (
        <div className="relative h-fit flex items-center justify-center">
            {items.map((item, index) => (
                <SkillContent key={index} {...item} />
            ))}
        </div>
    );
}
