import {EndpointRepresentation} from "./endpoints";
import {ComputedAnchorPosition, Orientation} from "../factory/anchor-factory";
import {jsPlumbInstance} from "../core";
import {EndpointFactory} from "../factory/endpoint-factory";

export type ComputedBlankEndpoint = [ number, number, number, number  ];

export class BlankEndpoint<E> extends EndpointRepresentation<E, ComputedBlankEndpoint> {

    constructor(instance:jsPlumbInstance<E>, params?:any) {
        super(instance);
    }

    _compute(anchorPoint:ComputedAnchorPosition, orientation:Orientation, endpointStyle:any):ComputedBlankEndpoint {

        this.x = anchorPoint[0];
        this.y = anchorPoint[1];
        this.w = 10;
        this.h = 0;

        return [anchorPoint[0], anchorPoint[1], 10, 0];
    }

    getType(): string {
        return "Blank";
    }
}

EndpointFactory.register("Blank", BlankEndpoint);


