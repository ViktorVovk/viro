/**
 * Copyright (c) 2016-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViroSphere
 */

'use strict';

import React, { Component } from 'react';
import { requireNativeComponent, View, StyleSheet } from 'react-native';
var NativeMethodsMixin = require('react/lib/NativeMethodsMixin');
var PropTypes = require('react/lib/ReactPropTypes');


/**
 * Used to render a ViroSphere
 */
var ViroSphere = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    ...View.propTypes,
    position: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    visible: PropTypes.bool,
    opacity: PropTypes.number,
    widthSegmentCount: PropTypes.number,
    heightSegmentCount: PropTypes.number,
    radius: PropTypes.number,
    facesOutward: PropTypes.bool,
    materials: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
    transformBehaviors: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
  },

  render: function() {
    if (this.props.material) {
      console.error('The <ViroSphere> component takes a `materials` property rather than `material`.');
    }
    // Since materials and transformBehaviors can be either a string or an array, convert the string to a 1-element array.
    let materials = typeof this.props.materials === 'string' ? new Array(this.props.materials) : this.props.materials;
    let transformBehaviors = typeof this.props.transformBehaviors === 'string' ?
        new Array(this.props.transformBehaviors) : this.props.transformBehaviors;
    return (
      <VRTSphere {...this.props} materials={materials} transformBehaviors={transformBehaviors} />
    );
  }
});


var VRTSphere = requireNativeComponent(
  'VRTSphere', ViroSphere
);


module.exports = ViroSphere;