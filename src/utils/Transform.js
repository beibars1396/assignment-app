import {
    createIdentityMatrix,
    multiplyInto,
    reusePerspectiveCommand,
    reuseTranslate3dCommand,
} from './MatrixMath'

export const rotateXMatrix= ({ matrix, deg }) => {
    const rad = (Math.PI / 180) * deg;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const rotate = [
        1, 0, 0, 0,
        0, cos, -sin, 0,
        0, sin, cos, 0,
        0, 0, 0, 1,
    ];
    multiplyInto(matrix, matrix, rotate);
}

export const perspectiveMatrix = ({ matrix, value }) => {
    const perspective = createIdentityMatrix();
    reusePerspectiveCommand(perspective, value);
    multiplyInto(matrix, matrix, perspective);
}

export const translateMatrix = ({ matrix, origin }) => {
    const { x, y, z } = origin;
    const translate = createIdentityMatrix();
    reuseTranslate3dCommand(translate, x, y, z);
    multiplyInto(matrix, translate, matrix);
}

export const untranslateMatrix = ({matrix, origin}) => {
    const { x, y, z } = origin;
    const unTranslate = createIdentityMatrix();
    reuseTranslate3dCommand(unTranslate, -x, -y, -z);
    multiplyInto(matrix, matrix, unTranslate);
}
