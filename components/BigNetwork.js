import React, {useRef} from "react";
import {ForceGraph2D} from 'react-force-graph';

function genRandomTree(N = 300, reverse = false) {
    const links = [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
            [reverse ? 'target' : 'source']: id,
            [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
        }));

    for (const key of Array(10).keys()) {
        links.push({
            source: Math.round(Math.random() * (N - 1)),
            target: Math.round(Math.random() * (N - 1))
        });

    }

    return {
        nodes: [...Array(N).keys()].map(i => ({id: i})),
        links,
    };
}

export default function BigNetwork() {
    const ref = useRef();
    const gData = genRandomTree(50);

    return (
        <ForceGraph2D
            ref={ref}
            cooldownTicks={100}
            onEngineStop={() => ref.current.zoomToFit(400)}
            graphData={gData}

            backgroundColor="rgba(0, 0, 0, 0)"
            nodeAutoColorBy={d => d.id % 2}
            linkAutoColorBy={d => gData.nodes[d.source].id % 2}
            linkWidth={2}
        />
    )
}