/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Blocklist of unit tests from angular/material2 with ivy that are skipped when running on
 * angular/angular. As bugs are resolved, items should be removed from this blocklist.
 *
 * The `notes` section should be used to keep track of specific issues associated with the failures.
 */

// clang-format off
// tslint:disable

window.testBlocklist = {
  "CdkDrag standalone draggable should throw if attached to an ng-container": {
    "error": "Error: Expected function to throw an exception with a message matching /^cdkDrag must be attached to an element node/, but it threw an exception with message 'No provider for ChangeDetectorRef!'.",
    "notes": "Unknown"
  },
  "MatBadge should clear any pre-existing badges": {
    "error": "Error: Expected 2 to be 1.",
    "notes": "Breaking change: Static directive inputs evaluated in creation mode (MatBadge._clearExistingBadges is executed before child nodes of PreExistingBadge are aded to the DOM)"
  },
  "MatSidenav should be fixed position when in fixed mode": {
    "error": "Error: Expected ng-tns-c380-0 ng-trigger ng-trigger-transform mat-drawer mat-sidenav mat-drawer-over ng-star-inserted to contain 'mat-sidenav-fixed'.",
    "notes": "FW-1132: Host class bindings don't work if super class has host class bindings"
  },
  "MatSidenav should set fixed bottom and top when in fixed mode": {
    "error": "Error: Expected '' to be '20px'.",
    "notes": "FW-1132: Host class bindings don't work if super class has host class bindings"
  },
  "Dialog should set the proper animation states": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatAutocomplete aria should set role of autocomplete panel to listbox": {
    "error": "TypeError: Cannot read property 'nativeElement' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatAutocomplete aria should set aria-owns based on the attached autocomplete": {
    "error": "TypeError: Cannot read property 'nativeElement' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatDialog should set the proper animation states": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should enable ripples on items by default": {
    "error": "TypeError: Cannot read property 'query' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should disable ripples on disabled items": {
    "error": "TypeError: Cannot read property 'query' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should disable ripples if disableRipple is set": {
    "error": "TypeError: Cannot read property 'query' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu nested menu should close submenu when hovering over disabled sibling item": {
    "error": "TypeError: Cannot read property 'nativeElement' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu nested menu should not open submenu when hovering over disabled trigger": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  }
};
// clang-format on
