/**
 * Geometry Type enumeration
 */
export enum GeometryType {

    /**
     * The root of the geometry type hierarchy
     */
    GEOMETRY,

    /**
     * A single location in space. Each point has an X and Y coordinate. A point
     * MAY optionally also have a Z and/or an M value.
     */
    POINT,

    /**
     * A Curve that connects two or more points in space.
     */
    LINESTRING,

    /**
     * A restricted form of CurvePolygon where each ring is defined as a simple,
     * closed LineString.
     */
    POLYGON,

    /**
     * A restricted form of GeometryCollection where each Geometry in the
     * collection must be of type Point.
     */
    MULTIPOINT,

    /**
     * A restricted form of MultiCurve where each Curve in the collection must
     * be of type LineString.
     */
    MULTILINESTRING,

    /**
     * A restricted form of MultiSurface where each Surface in the collection
     * must be of type Polygon.
     */
    MULTIPOLYGON,

    /**
     * A collection of zero or more Geometry instances.
     */
    GEOMETRYCOLLECTION,

    /**
     * Circular String, Curve sub type
     */
    CIRCULARSTRING,

    /**
     * Compound Curve, Curve sub type
     */
    COMPOUNDCURVE,

    /**
     * A planar surface defined by an exterior ring and zero or more interior
     * ring. Each ring is defined by a Curve instance.
     */
    CURVEPOLYGON,

    /**
     * A restricted form of GeometryCollection where each Geometry in the
     * collection must be of type Curve.
     */
    MULTICURVE,

    /**
     * A restricted form of GeometryCollection where each Geometry in the
     * collection must be of type Surface.
     */
    MULTISURFACE,

    /**
     * The base type for all 1-dimensional geometry types. A 1-dimensional
     * geometry is a geometry that has a length, but no area. A curve is
     * considered simple if it does not intersect itself (except at the start
     * and end point). A curve is considered closed its start and end point are
     * coincident. A simple, closed curve is called a ring.
     */
    CURVE,

    /**
     * The base type for all 2-dimensional geometry types. A 2-dimensional
     * geometry is a geometry that has an area.
     */
    SURFACE,

    /**
     * Contiguous collection of polygons which share common boundary segments.
     */
    POLYHEDRALSURFACE,

    /**
     * A tetrahedron (4 triangular faces), corner at the origin and each unit
     * coordinate digit.
     */
    TIN,

    /**
     * Triangle
     */
    TRIANGLE
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GeometryType {
    export function nameFromType(type: GeometryType): string {
        let name = null;
        if (type !== null && type !== undefined) {
            name = GeometryType[type];
        }
        return name;
    }

    export function fromName(type: string): GeometryType {
        return GeometryType[type as keyof typeof GeometryType] as GeometryType;
    }

    export function values (): GeometryType[] {
        return [
            GeometryType. GEOMETRY,
            GeometryType.POINT,
            GeometryType.LINESTRING,
            GeometryType.POLYGON,
            GeometryType.MULTIPOINT,
            GeometryType.MULTILINESTRING,
            GeometryType.MULTIPOLYGON,
            GeometryType.GEOMETRYCOLLECTION,
            GeometryType.CIRCULARSTRING,
            GeometryType.COMPOUNDCURVE,
            GeometryType.CURVEPOLYGON,
            GeometryType.MULTICURVE,
            GeometryType.MULTISURFACE,
            GeometryType.CURVE,
            GeometryType.SURFACE,
            GeometryType.POLYHEDRALSURFACE,
            GeometryType.TIN,
            GeometryType.TRIANGLE
        ]
    }
}
