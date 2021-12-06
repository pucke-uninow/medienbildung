import React from 'react';
import dynamic from "next/dynamic";

const DynamicNetwork = dynamic(() => import('../../components/BigNetwork'), {
  ssr: false
});

export default function NetworkPage() {
    return (
    <DynamicNetwork/>
  );
}