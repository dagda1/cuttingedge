// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RoadmapService from '../../content/services/roadmap.mdx';
import { Service } from '../Services/Service';

export function Roadmap(): JSX.Element {
  return (
    <Service heading="Productivity roadmap" callType="frontend-productivity-transformation">
      <RoadmapService />
    </Service>
  );
}
